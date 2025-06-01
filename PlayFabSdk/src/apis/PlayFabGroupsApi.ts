import type { EmptyResponse } from "../types/PlayFab";
import type {

  AcceptGroupApplicationRequest,
  AcceptGroupInvitationRequest,
  AddMembersRequest,
  ApplyToGroupRequest,
  BlockEntityRequest,
  ChangeMemberRoleRequest,
  CreateGroupRequest,
  CreateGroupRoleRequest,
  DeleteGroupRequest,
  DeleteRoleRequest,
  GetGroupRequest,
  InviteToGroupRequest,
  IsMemberRequest,
  ListGroupApplicationsRequest,
  ListGroupBlocksRequest,
  ListGroupInvitationsRequest,
  ListGroupMembersRequest,
  ListMembershipRequest,
  ListMembershipOpportunitiesRequest,
  RemoveGroupApplicationRequest,
  RemoveGroupInvitationRequest,
  RemoveMembersRequest,
  UnblockEntityRequest,
  UpdateGroupRequest,
  UpdateGroupRoleRequest,
  ApplyToGroupResponse,
  CreateGroupResponse,
  CreateGroupRoleResponse,
  GetGroupResponse,
  InviteToGroupResponse,
  IsMemberResponse,
  ListGroupApplicationsResponse,
  ListGroupBlocksResponse,
  ListGroupInvitationsResponse,
  ListGroupMembersResponse,
  ListMembershipResponse,
  ListMembershipOpportunitiesResponse,
  UpdateGroupResponse,
  UpdateGroupRoleResponse,
} from "../types/PlayFabGroupsApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabGroupsApi extends PlayFabCommon {

    /**
     * Accepts an outstanding invitation to to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/acceptgroupapplication
     */
    AcceptGroupApplication (request: AcceptGroupApplicationRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/AcceptGroupApplication", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Accepts an invitation to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/acceptgroupinvitation
     */
    AcceptGroupInvitation (request: AcceptGroupInvitationRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/AcceptGroupInvitation", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Adds members to a group or role.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/addmembers
     */
    AddMembers (request: AddMembersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/AddMembers", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Applies to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/applytogroup
     */
    ApplyToGroup (request: ApplyToGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ApplyToGroupResponse>("/Group/ApplyToGroup", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Blocks a list of entities from joining a group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/blockentity
     */
    BlockEntity (request: BlockEntityRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/BlockEntity", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Changes the role membership of a list of entities from one role to another.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/changememberrole
     */
    ChangeMemberRole (request: ChangeMemberRoleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/ChangeMemberRole", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates a new group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/creategroup
     */
    CreateGroup (request: CreateGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateGroupResponse>("/Group/CreateGroup", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates a new group role.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/createrole
     */
    CreateRole (request: CreateGroupRoleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateGroupRoleResponse>("/Group/CreateRole", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes a group and all roles, invitations, join requests, and blocks associated with it.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/deletegroup
     */
    DeleteGroup (request: DeleteGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/DeleteGroup", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes an existing role in a group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/deleterole
     */
    DeleteRole (request: DeleteRoleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/DeleteRole", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information about a group and its roles
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/getgroup
     */
    GetGroup (request: GetGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetGroupResponse>("/Group/GetGroup", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Invites a player to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/invitetogroup
     */
    InviteToGroup (request: InviteToGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<InviteToGroupResponse>("/Group/InviteToGroup", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Checks to see if an entity is a member of a group or role within the group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/ismember
     */
    IsMember (request: IsMemberRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<IsMemberResponse>("/Group/IsMember", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all outstanding requests to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listgroupapplications
     */
    ListGroupApplications (request: ListGroupApplicationsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListGroupApplicationsResponse>("/Group/ListGroupApplications", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all entities blocked from joining a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listgroupblocks
     */
    ListGroupBlocks (request: ListGroupBlocksRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListGroupBlocksResponse>("/Group/ListGroupBlocks", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all outstanding invitations for a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listgroupinvitations
     */
    ListGroupInvitations (request: ListGroupInvitationsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListGroupInvitationsResponse>("/Group/ListGroupInvitations", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all members for a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listgroupmembers
     */
    ListGroupMembers (request: ListGroupMembersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListGroupMembersResponse>("/Group/ListGroupMembers", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all groups and roles for an entity
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listmembership
     */
    ListMembership (request: ListMembershipRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListMembershipResponse>("/Group/ListMembership", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all outstanding invitations and group applications for an entity
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listmembershipopportunities
     */
    ListMembershipOpportunities (request: ListMembershipOpportunitiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListMembershipOpportunitiesResponse>("/Group/ListMembershipOpportunities", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Removes an application to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/removegroupapplication
     */
    RemoveGroupApplication (request: RemoveGroupApplicationRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/RemoveGroupApplication", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Removes an invitation join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/removegroupinvitation
     */
    RemoveGroupInvitation (request: RemoveGroupInvitationRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/RemoveGroupInvitation", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Removes members from a group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/removemembers
     */
    RemoveMembers (request: RemoveMembersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/RemoveMembers", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Unblocks a list of entities from joining a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/unblockentity
     */
    UnblockEntity (request: UnblockEntityRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Group/UnblockEntity", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Updates non-membership data about a group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/updategroup
     */
    UpdateGroup (request: UpdateGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateGroupResponse>("/Group/UpdateGroup", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Updates metadata about a role.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/updaterole
     */
    UpdateRole (request: UpdateGroupRoleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateGroupRoleResponse>("/Group/UpdateRole", request, "X-EntityToken", customData, extraHeaders);
    }

};
