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
 * @interface CueCueNumberDoFadeRequest
 */
export interface CueCueNumberDoFadeRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberDoFadeRequest
     */
    number?: string;
}

export function CueCueNumberDoFadeRequestFromJSON(json: any): CueCueNumberDoFadeRequest {
    return CueCueNumberDoFadeRequestFromJSONTyped(json, false);
}

export function CueCueNumberDoFadeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberDoFadeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
    };
}

export function CueCueNumberDoFadeRequestToJSON(value?: CueCueNumberDoFadeRequest | null): any {
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
