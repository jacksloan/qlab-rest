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
 * @interface CueCueNumberNameRequest
 */
export interface CueCueNumberNameRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberNameRequest
     */
    string?: string;
}

export function CueCueNumberNameRequestFromJSON(json: any): CueCueNumberNameRequest {
    return CueCueNumberNameRequestFromJSONTyped(json, false);
}

export function CueCueNumberNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberNameRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'string': !exists(json, 'string') ? undefined : json['string'],
    };
}

export function CueCueNumberNameRequestToJSON(value?: CueCueNumberNameRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'string': value.string,
    };
}
