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
 * response object for /overrides/artNetEnabled
 * @export
 * @interface OverridesArtNetEnabledResponse
 */
export interface OverridesArtNetEnabledResponse {
    /**
     * 
     * @type {string}
     * @memberof OverridesArtNetEnabledResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OverridesArtNetEnabledResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof OverridesArtNetEnabledResponse
     */
    data?: object;
}

export function OverridesArtNetEnabledResponseFromJSON(json: any): OverridesArtNetEnabledResponse {
    return OverridesArtNetEnabledResponseFromJSONTyped(json, false);
}

export function OverridesArtNetEnabledResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesArtNetEnabledResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function OverridesArtNetEnabledResponseToJSON(value?: OverridesArtNetEnabledResponse | null): any {
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

