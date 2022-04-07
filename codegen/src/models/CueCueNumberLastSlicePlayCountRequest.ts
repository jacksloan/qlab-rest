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
 * 
 * @export
 * @interface CueCueNumberLastSlicePlayCountRequest
 */
export interface CueCueNumberLastSlicePlayCountRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLastSlicePlayCountRequest
     */
    playCount?: string;
}

export function CueCueNumberLastSlicePlayCountRequestFromJSON(json: any): CueCueNumberLastSlicePlayCountRequest {
    return CueCueNumberLastSlicePlayCountRequestFromJSONTyped(json, false);
}

export function CueCueNumberLastSlicePlayCountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberLastSlicePlayCountRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'playCount': !exists(json, 'play_count') ? undefined : json['play_count'],
    };
}

export function CueCueNumberLastSlicePlayCountRequestToJSON(value?: CueCueNumberLastSlicePlayCountRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'play_count': value.playCount,
    };
}

