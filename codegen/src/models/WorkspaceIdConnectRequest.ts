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
 * @interface WorkspaceIdConnectRequest
 */
export interface WorkspaceIdConnectRequest {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdConnectRequest
     */
    passcodeString?: string;
}

export function WorkspaceIdConnectRequestFromJSON(json: any): WorkspaceIdConnectRequest {
    return WorkspaceIdConnectRequestFromJSONTyped(json, false);
}

export function WorkspaceIdConnectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdConnectRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'passcodeString': !exists(json, 'passcode_string') ? undefined : json['passcode_string'],
    };
}

export function WorkspaceIdConnectRequestToJSON(value?: WorkspaceIdConnectRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'passcode_string': value.passcodeString,
    };
}

