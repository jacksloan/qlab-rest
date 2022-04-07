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
 * @interface OverridesMscInputEnabledRequest
 */
export interface OverridesMscInputEnabledRequest {
    /**
     * 
     * @type {string}
     * @memberof OverridesMscInputEnabledRequest
     */
    number?: string;
}

export function OverridesMscInputEnabledRequestFromJSON(json: any): OverridesMscInputEnabledRequest {
    return OverridesMscInputEnabledRequestFromJSONTyped(json, false);
}

export function OverridesMscInputEnabledRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverridesMscInputEnabledRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
    };
}

export function OverridesMscInputEnabledRequestToJSON(value?: OverridesMscInputEnabledRequest | null): any {
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

