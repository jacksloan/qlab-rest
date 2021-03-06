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
 * response object for /overrides/toggleMidiOutput
 * @export
 * @interface OverridesToggleMidiOutputResponse
 */
export interface OverridesToggleMidiOutputResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleMidiOutputResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesToggleMidiOutputResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesToggleMidiOutputResponse
     */
    data?: object;
}

export function OverridesToggleMidiOutputResponseFromJSON(json: any): OverridesToggleMidiOutputResponse {
    return OverridesToggleMidiOutputResponseFromJSONTyped(json, false);
}

export function OverridesToggleMidiOutputResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesToggleMidiOutputResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesToggleMidiOutputResponseToJSON(value?: OverridesToggleMidiOutputResponse | null): any {
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

