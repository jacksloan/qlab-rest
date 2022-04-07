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
 * response object for /cue/{cue_number}/rotationType
 * @export
 * @interface CueCueNumberRotationTypeResponse
 */
export interface CueCueNumberRotationTypeResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberRotationTypeResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberRotationTypeResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberRotationTypeResponse
     */
    data?: object;
}

export function CueCueNumberRotationTypeResponseFromJSON(json: any): CueCueNumberRotationTypeResponse {
    return CueCueNumberRotationTypeResponseFromJSONTyped(json, false);
}

export function CueCueNumberRotationTypeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberRotationTypeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberRotationTypeResponseToJSON(value?: CueCueNumberRotationTypeResponse | null): any {
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

