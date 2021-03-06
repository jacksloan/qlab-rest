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
 * response object for /workspace/{id}/select_id/{selectId}
 * @export
 * @interface WorkspaceIdSelectIdSelectIdResponse
 */
export interface WorkspaceIdSelectIdSelectIdResponse {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdSelectIdSelectIdResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdSelectIdSelectIdResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof WorkspaceIdSelectIdSelectIdResponse
     */
    data?: object;
}

export function WorkspaceIdSelectIdSelectIdResponseFromJSON(json: any): WorkspaceIdSelectIdSelectIdResponse {
    return WorkspaceIdSelectIdSelectIdResponseFromJSONTyped(json, false);
}

export function WorkspaceIdSelectIdSelectIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdSelectIdSelectIdResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function WorkspaceIdSelectIdSelectIdResponseToJSON(value?: WorkspaceIdSelectIdSelectIdResponse | null): any {
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

