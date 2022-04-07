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
 * response object for /overrides/toggleMscInput
 * @export
 * @interface OverridesToggleMscInputResponse
 */
export interface OverridesToggleMscInputResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleMscInputResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleMscInputResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesToggleMscInputResponse
     */
    data?: object;
}

export function OverridesToggleMscInputResponseFromJSON(json: any): OverridesToggleMscInputResponse {
    return OverridesToggleMscInputResponseFromJSONTyped(json, false);
}

export function OverridesToggleMscInputResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesToggleMscInputResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesToggleMscInputResponseToJSON(value?: OverridesToggleMscInputResponse | null): any {
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

