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
 * 
 * @export
 * @interface OverridesSysexInputEnabledRequest
 */
export interface OverridesSysexInputEnabledRequest {
    /**
     * 
     * @type {string}
     * @memberof OverridesSysexInputEnabledRequest
     */
    number?: string;
}

export function OverridesSysexInputEnabledRequestFromJSON(json: any): OverridesSysexInputEnabledRequest {
    return OverridesSysexInputEnabledRequestFromJSONTyped(json, false);
}

export function OverridesSysexInputEnabledRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesSysexInputEnabledRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
    };
}

export function OverridesSysexInputEnabledRequestToJSON(value?: OverridesSysexInputEnabledRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'number': value.number,
    };
}
