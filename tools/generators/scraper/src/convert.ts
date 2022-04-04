import * as _ from 'lodash';
import { camelCase } from 'lodash';
import { OpenAPIV3 as OpenAPI } from 'openapi-types';
import { OscCommand } from './model';

export function convert(qlab: OscCommand[]): OpenAPI.Document {
  const paths = qlab.reduce((acc, curr) => {
    const { path, description, commandArguments, pathVariables } = curr;
    return {
      ...acc,
      [path]: <OpenAPI.PathItemObject>{
        post: <OpenAPI.OperationObject>{
          operationId: camelCase(createSchemaName(path)),
          description,
          parameters: [
            expectResponseQueryParam,
            ...pathVariableObjects(pathVariables),
          ],
          responses: response$RefObject(path),
          ...maybeRequestBody$RefObject(path, commandArguments),
        },
      },
    };
  }, {});

  return <OpenAPI.Document>{
    openapi: '3.0.2',
    servers: [{ url: '/api' }],
    info: {
      title: 'QLab OSC Rest Proxy',
      version: '1.0',
    },
    paths,
    components: {
      schemas: {
        ...createComponentSchemaRefs(qlab),
        _WorkspacesCue: {
          type: 'object',
          properties: {
            number: { type: 'string' },
            uniqueID: { type: 'string' },
            cues: {
              type: 'array',
              items: { $ref: '#/components/schemas/_WorkspacesCue' },
            },
            flagged: { type: 'boolean' },
            listName: { type: 'string' },
            type: {
              type: 'string',
              enum: [
                'Group',
                'Audio',
                'Video',
                'Text',
                'Camera',
                'Mic',
                'Light',
                'Fade',
                'Network',
                'Midi',
              ],
            },
            colorName: { type: 'boolean' },
            name: { type: 'boolean' },
            armed: { type: 'boolean' },
          },
        },
      },
    },
  };
}

function maybeRequestBody$RefObject(
  path: string,
  commandArguments: string[]
):
  | object
  | {
      requestBody: OpenAPI.RequestBodyObject;
    } {
  const hasArgs = (commandArguments || []).length > 0;
  return hasArgs
    ? {
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: `#/components/schemas/${createSchemaName(
                  path,
                  'Request'
                )}`,
              },
            },
          },
        },
      }
    : {};
}

function pathVariableObjects(variables: string[]) {
  return variables.map(
    (name) =>
      <OpenAPI.ParameterObject>{
        in: 'path',
        name,
        required: true,
        schema: { type: 'string' },
      }
  );
}

function response$RefObject(path: string): {
  200: OpenAPI.ResponseObject;
} {
  return {
    200: {
      description: 'ok',
      content: {
        'application/json': {
          schema: {
            $ref: `#/components/schemas/${createSchemaName(path, 'Response')}`,
          },
        },
      },
    },
  };
}

const expectResponseQueryParam: OpenAPI.ParameterObject = {
  in: 'query',
  name: 'expect-response',
  description:
    'If a response is expected from QLab for this command. Defaults to false.',
  required: false,
  schema: { type: 'boolean', default: false },
};

function createSchemaName(
  path: string,
  suffix?: 'Response' | 'Request'
): string {
  const name = cleanSpecialChars(path)
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .split('/')
    .map((v, idx) => (idx > 0 ? _.startCase(v).split(' ').join('') : v))
    .join('');
  return name + (suffix || '');
}

function cleanSpecialChars(path: string): string {
  return path.replace(/\+/g, 'plus').replace(/\-/g, 'minus');
}
function createComponentSchemaRefs(qlab: OscCommand[]): {
  [key: string]: OpenAPI.ReferenceObject | OpenAPI.SchemaObject;
} {
  return qlab.reduce((acc, curr) => {
    const hasArgs = (curr.commandArguments || []).length > 0;

    const requestSchema = hasArgs
      ? {
          [createSchemaName(curr.path, 'Request')]: <OpenAPI.SchemaObject>{
            type: 'object',
            properties: curr.commandArguments.reduce(
              (props, prop) => ({
                ...props,
                [prop]: <OpenAPI.SchemaObject>{
                  type: 'string',
                },
              }),
              {}
            ),
          },
        }
      : {};

    const responseSchema = {
      [createSchemaName(curr.path, 'Response')]: <OpenAPI.SchemaObject>{
        type: 'object',
        properties: {
          status: { type: 'string' },
          address: { type: 'string' },
          data: { type: 'object' },
        },
        nullable: true,
        description: 'response object for ' + curr.path,
      },
    };

    return <{ [key: string]: OpenAPI.ReferenceObject | OpenAPI.SchemaObject }>{
      ...acc,
      ...requestSchema,
      ...responseSchema,
    };
  }, <{ [key: string]: OpenAPI.ReferenceObject | OpenAPI.SchemaObject }>{});
}
