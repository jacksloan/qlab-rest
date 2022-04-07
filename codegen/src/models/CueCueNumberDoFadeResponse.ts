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
 * response object for /cue/{cue_number}/doFade
 * @export
 * @interface CueCueNumberDoFadeResponse
 */
export interface CueCueNumberDoFadeResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberDoFadeResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberDoFadeResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberDoFadeResponse
     */
    data?: object;
}

export function CueCueNumberDoFadeResponseFromJSON(json: any): CueCueNumberDoFadeResponse {
    return CueCueNumberDoFadeResponseFromJSONTyped(json, false);
}

export function CueCueNumberDoFadeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberDoFadeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberDoFadeResponseToJSON(value?: CueCueNumberDoFadeResponse | null): any {
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
