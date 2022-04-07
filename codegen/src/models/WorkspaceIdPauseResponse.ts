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
 * response object for /workspace/{id}/pause
 * @export
 * @interface WorkspaceIdPauseResponse
 */
export interface WorkspaceIdPauseResponse {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdPauseResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdPauseResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof WorkspaceIdPauseResponse
     */
    data?: object;
}

export function WorkspaceIdPauseResponseFromJSON(json: any): WorkspaceIdPauseResponse {
    return WorkspaceIdPauseResponseFromJSONTyped(json, false);
}

export function WorkspaceIdPauseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdPauseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function WorkspaceIdPauseResponseToJSON(value?: WorkspaceIdPauseResponse | null): any {
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
