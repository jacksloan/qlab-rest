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
 * response object for /cue/{cue_number}/byte1
 * @export
 * @interface CueCueNumberByte1Response
 */
export interface CueCueNumberByte1Response {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberByte1Response
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberByte1Response
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberByte1Response
     */
    data?: object;
}

export function CueCueNumberByte1ResponseFromJSON(json: any): CueCueNumberByte1Response {
    return CueCueNumberByte1ResponseFromJSONTyped(json, false);
}

export function CueCueNumberByte1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberByte1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberByte1ResponseToJSON(value?: CueCueNumberByte1Response | null): any {
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
