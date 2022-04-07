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
 * response object for /cue/{cue_number}/sliderLevel
 * @export
 * @interface CueCueNumberSliderLevelResponse
 */
export interface CueCueNumberSliderLevelResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSliderLevelResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSliderLevelResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberSliderLevelResponse
     */
    data?: object;
}

export function CueCueNumberSliderLevelResponseFromJSON(json: any): CueCueNumberSliderLevelResponse {
    return CueCueNumberSliderLevelResponseFromJSONTyped(json, false);
}

export function CueCueNumberSliderLevelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberSliderLevelResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberSliderLevelResponseToJSON(value?: CueCueNumberSliderLevelResponse | null): any {
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
