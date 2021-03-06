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
 * response object for /workspace/{id}/dashboard/newCueWithAll
 * @export
 * @interface WorkspaceIdDashboardNewCueWithAllResponse
 */
export interface WorkspaceIdDashboardNewCueWithAllResponse {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdDashboardNewCueWithAllResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdDashboardNewCueWithAllResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof WorkspaceIdDashboardNewCueWithAllResponse
     */
    data?: object;
}

export function WorkspaceIdDashboardNewCueWithAllResponseFromJSON(json: any): WorkspaceIdDashboardNewCueWithAllResponse {
    return WorkspaceIdDashboardNewCueWithAllResponseFromJSONTyped(json, false);
}

export function WorkspaceIdDashboardNewCueWithAllResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdDashboardNewCueWithAllResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function WorkspaceIdDashboardNewCueWithAllResponseToJSON(value?: WorkspaceIdDashboardNewCueWithAllResponse | null): any {
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

