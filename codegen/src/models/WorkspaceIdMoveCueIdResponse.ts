/* tslint:disable */
/* eslint-disable */
/**
 * QLab OSC Rest Proxy
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * response object for /workspace/{id}/move/{cue_id}
 * @export
 * @interface WorkspaceIdMoveCueIdResponse
 */
export interface WorkspaceIdMoveCueIdResponse {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdMoveCueIdResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdMoveCueIdResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof WorkspaceIdMoveCueIdResponse
     */
    data?: object;
}

export function WorkspaceIdMoveCueIdResponseFromJSON(json: any): WorkspaceIdMoveCueIdResponse {
    return WorkspaceIdMoveCueIdResponseFromJSONTyped(json, false);
}

export function WorkspaceIdMoveCueIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdMoveCueIdResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function WorkspaceIdMoveCueIdResponseToJSON(value?: WorkspaceIdMoveCueIdResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'address': value.address,
        'data': value.data,
    };
}

