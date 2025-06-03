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
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/acceptgroupapplication
   */
  AcceptGroupApplication (request: AcceptGroupApplicationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/AcceptGroupApplication", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Accepts an invitation to join a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/acceptgroupinvitation
   */
  AcceptGroupInvitation (request: AcceptGroupInvitationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/AcceptGroupInvitation", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Adds members to a group or role.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/addmembers
   */
  AddMembers (request: AddMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/AddMembers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Applies to join a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/applytogroup
   */
  ApplyToGroup (request: ApplyToGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ApplyToGroupResponse>("/Group/ApplyToGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Blocks a list of entities from joining a group.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/blockentity
   */
  BlockEntity (request: BlockEntityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/BlockEntity", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Changes the role membership of a list of entities from one role to another.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/changememberrole
   */
  ChangeMemberRole (request: ChangeMemberRoleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/ChangeMemberRole", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a new group.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/creategroup
   */
  CreateGroup (request: CreateGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateGroupResponse>("/Group/CreateGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a new group role.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/createrole
   */
  CreateRole (request: CreateGroupRoleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateGroupRoleResponse>("/Group/CreateRole", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a group and all roles, invitations, join requests, and blocks associated with it.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/deletegroup
   */
  DeleteGroup (request: DeleteGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/DeleteGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes an existing role in a group.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/deleterole
   */
  DeleteRole (request: DeleteRoleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/DeleteRole", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information about a group and its roles
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/getgroup
   */
  GetGroup (request: GetGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetGroupResponse>("/Group/GetGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Invites a player to join a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/invitetogroup
   */
  InviteToGroup (request: InviteToGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<InviteToGroupResponse>("/Group/InviteToGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Checks to see if an entity is a member of a group or role within the group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/ismember
   */
  IsMember (request: IsMemberRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<IsMemberResponse>("/Group/IsMember", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all outstanding requests to join a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/listgroupapplications
   */
  ListGroupApplications (request: ListGroupApplicationsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListGroupApplicationsResponse>("/Group/ListGroupApplications", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all entities blocked from joining a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/listgroupblocks
   */
  ListGroupBlocks (request: ListGroupBlocksRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListGroupBlocksResponse>("/Group/ListGroupBlocks", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all outstanding invitations for a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/listgroupinvitations
   */
  ListGroupInvitations (request: ListGroupInvitationsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListGroupInvitationsResponse>("/Group/ListGroupInvitations", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all members for a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/listgroupmembers
   */
  ListGroupMembers (request: ListGroupMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListGroupMembersResponse>("/Group/ListGroupMembers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all groups and roles for an entity
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/listmembership
   */
  ListMembership (request: ListMembershipRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMembershipResponse>("/Group/ListMembership", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all outstanding invitations and group applications for an entity
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/listmembershipopportunities
   */
  ListMembershipOpportunities (request: ListMembershipOpportunitiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMembershipOpportunitiesResponse>("/Group/ListMembershipOpportunities", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Removes an application to join a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/removegroupapplication
   */
  RemoveGroupApplication (request: RemoveGroupApplicationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/RemoveGroupApplication", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Removes an invitation join a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/removegroupinvitation
   */
  RemoveGroupInvitation (request: RemoveGroupInvitationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/RemoveGroupInvitation", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Removes members from a group.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/removemembers
   */
  RemoveMembers (request: RemoveMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/RemoveMembers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Unblocks a list of entities from joining a group
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/unblockentity
   */
  UnblockEntity (request: UnblockEntityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/UnblockEntity", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates non-membership data about a group.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/updategroup
   */
  UpdateGroup (request: UpdateGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateGroupResponse>("/Group/UpdateGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates metadata about a role.
   * Reference: https://docs.microsoft.com/rest/api/playfab/group/groups/updaterole
   */
  UpdateRole (request: UpdateGroupRoleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateGroupRoleResponse>("/Group/UpdateRole", request, "X-EntityToken", extraHeaders);
  }

};
