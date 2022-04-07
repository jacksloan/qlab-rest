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
 * response object for /cue/{cue_number}/stopTargetWhenSliceEnds
 * @export
 * @interface CueCueNumberStopTargetWhenSliceEndsResponse
 */
export interface CueCueNumberStopTargetWhenSliceEndsResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberStopTargetWhenSliceEndsResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberStopTargetWhenSliceEndsResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberStopTargetWhenSliceEndsResponse
     */
    data?: object;
}

export function CueCueNumberStopTargetWhenSliceEndsResponseFromJSON(json: any): CueCueNumberStopTargetWhenSliceEndsResponse {
    return CueCueNumberStopTargetWhenSliceEndsResponseFromJSONTyped(json, false);
}

export function CueCueNumberStopTargetWhenSliceEndsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberStopTargetWhenSliceEndsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberStopTargetWhenSliceEndsResponseToJSON(value?: CueCueNumberStopTargetWhenSliceEndsResponse | null): any {
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
