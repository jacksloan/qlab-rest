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
 * response object for /cue/{cue_number}/playhead/next
 * @export
 * @interface CueCueNumberPlayheadNextResponse
 */
export interface CueCueNumberPlayheadNextResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberPlayheadNextResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberPlayheadNextResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberPlayheadNextResponse
     */
    data?: object;
}

export function CueCueNumberPlayheadNextResponseFromJSON(json: any): CueCueNumberPlayheadNextResponse {
    return CueCueNumberPlayheadNextResponseFromJSONTyped(json, false);
}

export function CueCueNumberPlayheadNextResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberPlayheadNextResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberPlayheadNextResponseToJSON(value?: CueCueNumberPlayheadNextResponse | null): any {
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

