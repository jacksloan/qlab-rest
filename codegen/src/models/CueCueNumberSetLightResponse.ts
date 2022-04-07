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
 * response object for /cue/{cue_number}/setLight
 * @export
 * @interface CueCueNumberSetLightResponse
 */
export interface CueCueNumberSetLightResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSetLightResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSetLightResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberSetLightResponse
     */
    data?: object;
}

export function CueCueNumberSetLightResponseFromJSON(json: any): CueCueNumberSetLightResponse {
    return CueCueNumberSetLightResponseFromJSONTyped(json, false);
}

export function CueCueNumberSetLightResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberSetLightResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberSetLightResponseToJSON(value?: CueCueNumberSetLightResponse | null): any {
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

