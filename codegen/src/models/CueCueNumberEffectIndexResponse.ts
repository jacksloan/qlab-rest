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
 * response object for /cue/{cue_number}/effectIndex
 * @export
 * @interface CueCueNumberEffectIndexResponse
 */
export interface CueCueNumberEffectIndexResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberEffectIndexResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberEffectIndexResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberEffectIndexResponse
     */
    data?: object;
}

export function CueCueNumberEffectIndexResponseFromJSON(json: any): CueCueNumberEffectIndexResponse {
    return CueCueNumberEffectIndexResponseFromJSONTyped(json, false);
}

export function CueCueNumberEffectIndexResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberEffectIndexResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberEffectIndexResponseToJSON(value?: CueCueNumberEffectIndexResponse | null): any {
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

