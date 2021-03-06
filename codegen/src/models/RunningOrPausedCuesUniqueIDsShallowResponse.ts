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
 * response object for /runningOrPausedCues/uniqueIDs/shallow
 * @export
 * @interface RunningOrPausedCuesUniqueIDsShallowResponse
 */
export interface RunningOrPausedCuesUniqueIDsShallowResponse {
    /**
     * 
     * @type {string}
     * @memberof RunningOrPausedCuesUniqueIDsShallowResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RunningOrPausedCuesUniqueIDsShallowResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof RunningOrPausedCuesUniqueIDsShallowResponse
     */
    data?: object;
}

export function RunningOrPausedCuesUniqueIDsShallowResponseFromJSON(json: any): RunningOrPausedCuesUniqueIDsShallowResponse {
    return RunningOrPausedCuesUniqueIDsShallowResponseFromJSONTyped(json, false);
}

export function RunningOrPausedCuesUniqueIDsShallowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RunningOrPausedCuesUniqueIDsShallowResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function RunningOrPausedCuesUniqueIDsShallowResponseToJSON(value?: RunningOrPausedCuesUniqueIDsShallowResponse | null): any {
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

