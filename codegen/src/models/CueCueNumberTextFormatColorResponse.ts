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
 * response object for /cue/{cue_number}/text/format/color
 * @export
 * @interface CueCueNumberTextFormatColorResponse
 */
export interface CueCueNumberTextFormatColorResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberTextFormatColorResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberTextFormatColorResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberTextFormatColorResponse
     */
    data?: object;
}

export function CueCueNumberTextFormatColorResponseFromJSON(json: any): CueCueNumberTextFormatColorResponse {
    return CueCueNumberTextFormatColorResponseFromJSONTyped(json, false);
}

export function CueCueNumberTextFormatColorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberTextFormatColorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberTextFormatColorResponseToJSON(value?: CueCueNumberTextFormatColorResponse | null): any {
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
