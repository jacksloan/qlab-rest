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
 * @interface WorkingDirectoryRequest
 */
export interface WorkingDirectoryRequest {
    /**
     * 
     * @type {string}
     * @memberof WorkingDirectoryRequest
     */
    path?: string;
}

export function WorkingDirectoryRequestFromJSON(json: any): WorkingDirectoryRequest {
    return WorkingDirectoryRequestFromJSONTyped(json, false);
}

export function WorkingDirectoryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkingDirectoryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function WorkingDirectoryRequestToJSON(value?: WorkingDirectoryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'path': value.path,
    };
}

