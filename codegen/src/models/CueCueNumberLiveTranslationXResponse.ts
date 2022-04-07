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
 * response object for /cue/{cue_number}/liveTranslationX
 * @export
 * @interface CueCueNumberLiveTranslationXResponse
 */
export interface CueCueNumberLiveTranslationXResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveTranslationXResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveTranslationXResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberLiveTranslationXResponse
     */
    data?: object;
}

export function CueCueNumberLiveTranslationXResponseFromJSON(json: any): CueCueNumberLiveTranslationXResponse {
    return CueCueNumberLiveTranslationXResponseFromJSONTyped(json, false);
}

export function CueCueNumberLiveTranslationXResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberLiveTranslationXResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberLiveTranslationXResponseToJSON(value?: CueCueNumberLiveTranslationXResponse | null): any {
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
