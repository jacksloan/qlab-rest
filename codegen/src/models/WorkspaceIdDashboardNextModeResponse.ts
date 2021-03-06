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
 * response object for /workspace/{id}/dashboard/nextMode
 * @export
 * @interface WorkspaceIdDashboardNextModeResponse
 */
export interface WorkspaceIdDashboardNextModeResponse {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdDashboardNextModeResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdDashboardNextModeResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof WorkspaceIdDashboardNextModeResponse
     */
    data?: object;
}

export function WorkspaceIdDashboardNextModeResponseFromJSON(json: any): WorkspaceIdDashboardNextModeResponse {
    return WorkspaceIdDashboardNextModeResponseFromJSONTyped(json, false);
}

export function WorkspaceIdDashboardNextModeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdDashboardNextModeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function WorkspaceIdDashboardNextModeResponseToJSON(value?: WorkspaceIdDashboardNextModeResponse | null): any {
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

