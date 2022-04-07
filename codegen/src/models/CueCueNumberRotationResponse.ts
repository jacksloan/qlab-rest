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
 * response object for /cue/{cue_number}/rotation
 * @export
 * @interface CueCueNumberRotationResponse
 */
export interface CueCueNumberRotationResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberRotationResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberRotationResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberRotationResponse
     */
    data?: object;
}

export function CueCueNumberRotationResponseFromJSON(json: any): CueCueNumberRotationResponse {
    return CueCueNumberRotationResponseFromJSONTyped(json, false);
}

export function CueCueNumberRotationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberRotationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberRotationResponseToJSON(value?: CueCueNumberRotationResponse | null): any {
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

