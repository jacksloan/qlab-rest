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
 * response object for /selectedCues/uniqueIDs/shallow
 * @export
 * @interface SelectedCuesUniqueIDsShallowResponse
 */
export interface SelectedCuesUniqueIDsShallowResponse {
    /**
     * 
     * @type {string}
     * @memberof SelectedCuesUniqueIDsShallowResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof SelectedCuesUniqueIDsShallowResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof SelectedCuesUniqueIDsShallowResponse
     */
    data?: object;
}

export function SelectedCuesUniqueIDsShallowResponseFromJSON(json: any): SelectedCuesUniqueIDsShallowResponse {
    return SelectedCuesUniqueIDsShallowResponseFromJSONTyped(json, false);
}

export function SelectedCuesUniqueIDsShallowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectedCuesUniqueIDsShallowResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function SelectedCuesUniqueIDsShallowResponseToJSON(value?: SelectedCuesUniqueIDsShallowResponse | null): any {
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

