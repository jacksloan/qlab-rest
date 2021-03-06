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
 * response object for /cue/{cue_number}/liveText
 * @export
 * @interface CueCueNumberLiveTextResponse
 */
export interface CueCueNumberLiveTextResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveTextResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveTextResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberLiveTextResponse
     */
    data?: object;
}

export function CueCueNumberLiveTextResponseFromJSON(json: any): CueCueNumberLiveTextResponse {
    return CueCueNumberLiveTextResponseFromJSONTyped(json, false);
}

export function CueCueNumberLiveTextResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberLiveTextResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberLiveTextResponseToJSON(value?: CueCueNumberLiveTextResponse | null): any {
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

