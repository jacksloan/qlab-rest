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
 * response object for /cueLists/shallow
 * @export
 * @interface CueListsShallowResponse
 */
export interface CueListsShallowResponse {
    /**
     * 
     * @type {string}
     * @memberof CueListsShallowResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueListsShallowResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueListsShallowResponse
     */
    data?: object;
}

export function CueListsShallowResponseFromJSON(json: any): CueListsShallowResponse {
    return CueListsShallowResponseFromJSONTyped(json, false);
}

export function CueListsShallowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueListsShallowResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueListsShallowResponseToJSON(value?: CueListsShallowResponse | null): any {
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

