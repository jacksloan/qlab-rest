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
 * response object for /overrides/toggleTimecodeOutput
 * @export
 * @interface OverridesToggleTimecodeOutputResponse
 */
export interface OverridesToggleTimecodeOutputResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleTimecodeOutputResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleTimecodeOutputResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesToggleTimecodeOutputResponse
     */
    data?: object;
}

export function OverridesToggleTimecodeOutputResponseFromJSON(json: any): OverridesToggleTimecodeOutputResponse {
    return OverridesToggleTimecodeOutputResponseFromJSONTyped(json, false);
}

export function OverridesToggleTimecodeOutputResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesToggleTimecodeOutputResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesToggleTimecodeOutputResponseToJSON(value?: OverridesToggleTimecodeOutputResponse | null): any {
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

