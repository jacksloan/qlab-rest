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
 * response object for /cue/{cue_number}/replaceLightCommand
 * @export
 * @interface CueCueNumberReplaceLightCommandResponse
 */
export interface CueCueNumberReplaceLightCommandResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberReplaceLightCommandResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberReplaceLightCommandResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberReplaceLightCommandResponse
     */
    data?: object;
}

export function CueCueNumberReplaceLightCommandResponseFromJSON(json: any): CueCueNumberReplaceLightCommandResponse {
    return CueCueNumberReplaceLightCommandResponseFromJSONTyped(json, false);
}

export function CueCueNumberReplaceLightCommandResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberReplaceLightCommandResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberReplaceLightCommandResponseToJSON(value?: CueCueNumberReplaceLightCommandResponse | null): any {
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

