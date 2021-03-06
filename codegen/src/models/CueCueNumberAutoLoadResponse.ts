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
 * response object for /cue/{cue_number}/autoLoad
 * @export
 * @interface CueCueNumberAutoLoadResponse
 */
export interface CueCueNumberAutoLoadResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberAutoLoadResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberAutoLoadResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberAutoLoadResponse
     */
    data?: object;
}

export function CueCueNumberAutoLoadResponseFromJSON(json: any): CueCueNumberAutoLoadResponse {
    return CueCueNumberAutoLoadResponseFromJSONTyped(json, false);
}

export function CueCueNumberAutoLoadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberAutoLoadResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberAutoLoadResponseToJSON(value?: CueCueNumberAutoLoadResponse | null): any {
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

