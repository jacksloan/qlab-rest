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
 * response object for /cue/{cue_number}/liveTranslationY
 * @export
 * @interface CueCueNumberLiveTranslationYResponse
 */
export interface CueCueNumberLiveTranslationYResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveTranslationYResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveTranslationYResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberLiveTranslationYResponse
     */
    data?: object;
}

export function CueCueNumberLiveTranslationYResponseFromJSON(json: any): CueCueNumberLiveTranslationYResponse {
    return CueCueNumberLiveTranslationYResponseFromJSONTyped(json, false);
}

export function CueCueNumberLiveTranslationYResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberLiveTranslationYResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberLiveTranslationYResponseToJSON(value?: CueCueNumberLiveTranslationYResponse | null): any {
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

