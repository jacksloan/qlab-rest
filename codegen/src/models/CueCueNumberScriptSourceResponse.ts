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
 * response object for /cue/{cue_number}/scriptSource
 * @export
 * @interface CueCueNumberScriptSourceResponse
 */
export interface CueCueNumberScriptSourceResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberScriptSourceResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberScriptSourceResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberScriptSourceResponse
     */
    data?: object;
}

export function CueCueNumberScriptSourceResponseFromJSON(json: any): CueCueNumberScriptSourceResponse {
    return CueCueNumberScriptSourceResponseFromJSONTyped(json, false);
}

export function CueCueNumberScriptSourceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberScriptSourceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberScriptSourceResponseToJSON(value?: CueCueNumberScriptSourceResponse | null): any {
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

