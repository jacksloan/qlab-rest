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
 * @interface CueCueNumberPanicInTimeRequest
 */
export interface CueCueNumberPanicInTimeRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberPanicInTimeRequest
     */
    number?: string;
}

export function CueCueNumberPanicInTimeRequestFromJSON(json: any): CueCueNumberPanicInTimeRequest {
    return CueCueNumberPanicInTimeRequestFromJSONTyped(json, false);
}

export function CueCueNumberPanicInTimeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberPanicInTimeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
    };
}

export function CueCueNumberPanicInTimeRequestToJSON(value?: CueCueNumberPanicInTimeRequest | null): any {
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

