import { joinPathFragments } from '@nrwl/devkit';
import { OpenAPIV3 as OpenAPI } from 'openapi-types';
import { OscCommand } from './model';

export function convert(qlab: OscCommand[]): OpenAPI.Document {
  const paths = qlab.reduce((acc, curr) => {
    const { path, description, commandArguments, pathVariables } = curr;

    const maybeRequestBody =
      (commandArguments || []).length < 1
        ? {}
        : {
            requestBody: <OpenAPI.RequestBodyObject>{
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: commandArguments.reduce(
                      (props, prop) => ({
                        ...props,
                        [prop]: <OpenAPI.SchemaObject>{
                          type: 'string',
                        },
                      }),
                      {}
                    ),
                  },
                },
              },
            },
          };

    return {
      ...acc,
      [path]: <OpenAPI.PathItemObject>{
        post: <OpenAPI.OperationObject>{
          description,
          parameters: [
            {
              in: 'query',
              name: 'expect response',
              description:
                'If a response is expected from QLab for this command. Defaults to false.',
              required: false,
              schema: { type: 'boolean', default: false },
            },
            ...pathVariables.map(
              (name) =>
                <OpenAPI.ParameterObject>{
                  in: 'path',
                  name,
                  required: true,
                  schema: { type: 'string' },
                }
            ),
          ],
          ...maybeRequestBody,
          responses: {
            200: {
              description: 'ok',
              content: {
                'application/json': {
                  schema: {
                    $ref: joinPathFragments('responses', `${path.replace(/\+/g, 'plus').replace(/\-/g, 'minus')}.json`),
                  },
                },
              },
            },
          },
        },
      },
    };
  }, {});

  // delete duplicate path
  delete paths['/cue/{cue_number}sliceMarkers'];

  return {
    openapi: '3.0.2',
    servers: [{ url: '/api' }],
    info: {
      title: 'QLab OSC Rest Proxy',
      version: '1.0',
    },
    paths,
  };
}
