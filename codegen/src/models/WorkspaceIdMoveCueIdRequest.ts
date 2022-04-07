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
 * @interface WorkspaceIdMoveCueIdRequest
 */
export interface WorkspaceIdMoveCueIdRequest {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdMoveCueIdRequest
     */
    newIndex?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdMoveCueIdRequest
     */
    newParentCueId?: string;
}

export function WorkspaceIdMoveCueIdRequestFromJSON(json: any): WorkspaceIdMoveCueIdRequest {
    return WorkspaceIdMoveCueIdRequestFromJSONTyped(json, false);
}

export function WorkspaceIdMoveCueIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdMoveCueIdRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'newIndex': !exists(json, 'new_index') ? undefined : json['new_index'],
        'newParentCueId': !exists(json, 'new_parent_cue_id') ? undefined : json['new_parent_cue_id'],
    };
}

export function WorkspaceIdMoveCueIdRequestToJSON(value?: WorkspaceIdMoveCueIdRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'new_index': value.newIndex,
        'new_parent_cue_id': value.newParentCueId,
    };
}
