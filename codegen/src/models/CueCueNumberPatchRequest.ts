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
 * @interface CueCueNumberPatchRequest
 */
export interface CueCueNumberPatchRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberPatchRequest
     */
    number?: string;
}

export function CueCueNumberPatchRequestFromJSON(json: any): CueCueNumberPatchRequest {
    return CueCueNumberPatchRequestFromJSONTyped(json, false);
}

export function CueCueNumberPatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberPatchRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
    };
}

export function CueCueNumberPatchRequestToJSON(value?: CueCueNumberPatchRequest | null): any {
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

