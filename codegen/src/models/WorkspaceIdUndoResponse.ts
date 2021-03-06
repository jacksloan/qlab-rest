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
 * response object for /workspace/{id}/undo
 * @export
 * @interface WorkspaceIdUndoResponse
 */
export interface WorkspaceIdUndoResponse {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdUndoResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdUndoResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof WorkspaceIdUndoResponse
     */
    data?: object;
}

export function WorkspaceIdUndoResponseFromJSON(json: any): WorkspaceIdUndoResponse {
    return WorkspaceIdUndoResponseFromJSONTyped(json, false);
}

export function WorkspaceIdUndoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdUndoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function WorkspaceIdUndoResponseToJSON(value?: WorkspaceIdUndoResponse | null): any {
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

