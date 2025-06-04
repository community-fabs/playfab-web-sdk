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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/acceptgroupapplication Microsoft Documentation}
   * @example
   * await groupClient.AcceptGroupApplication({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  AcceptGroupApplication (request: AcceptGroupApplicationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/AcceptGroupApplication", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Accepts an invitation to join a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/acceptgroupinvitation Microsoft Documentation}
   * @example
   * await groupClient.AcceptGroupInvitation({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   }
   * });
   */
  AcceptGroupInvitation (request: AcceptGroupInvitationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/AcceptGroupInvitation", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Adds members to a group or role.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/addmembers Microsoft Documentation}
   * @example
   * await groupClient.AddMembers({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "Members": [
   *     {
   *       "Id": "90901000",
   *       "Type": "title_player_account",
   *       "TypeString": "title_player_account"
   *     }
   *   ]
   * });
   */
  AddMembers (request: AddMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/AddMembers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Applies to join a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/applytogroup Microsoft Documentation}
   * @example
   * await groupClient.ApplyToGroup({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   }
   * });
   */
  ApplyToGroup (request: ApplyToGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ApplyToGroupResponse>("/Group/ApplyToGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Blocks a list of entities from joining a group.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/blockentity Microsoft Documentation}
   * @example
   * await groupClient.BlockEntity({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  BlockEntity (request: BlockEntityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/BlockEntity", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Changes the role membership of a list of entities from one role to another.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/changememberrole Microsoft Documentation}
   * @example
   * await groupClient.ChangeMemberRole({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "OriginRoleId": "awesomepeople",
   *   "DestinationRoleId": "members",
   *   "Members": [
   *     {
   *       "Id": "90901000",
   *       "Type": "title_player_account",
   *       "TypeString": "title_player_account"
   *     }
   *   ]
   * });
   */
  ChangeMemberRole (request: ChangeMemberRoleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/ChangeMemberRole", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a new group.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/creategroup Microsoft Documentation}
   * @example
   * await groupClient.CreateGroup({
   *   "GroupName": "Example Group"
   * });
   */
  CreateGroup (request: CreateGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateGroupResponse>("/Group/CreateGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a new group role.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/createrole Microsoft Documentation}
   * @example
   * await groupClient.CreateRole({
   *   "RoleId": "example",
   *   "RoleName": "Example Role",
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   }
   * });
   */
  CreateRole (request: CreateGroupRoleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateGroupRoleResponse>("/Group/CreateRole", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a group and all roles, invitations, join requests, and blocks associated with it.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/deletegroup Microsoft Documentation}
   * @example
   * await groupClient.DeleteGroup({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   }
   * });
   */
  DeleteGroup (request: DeleteGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/DeleteGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes an existing role in a group.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/deleterole Microsoft Documentation}
   * @example
   * await groupClient.DeleteRole({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "RoleId": "ABC1234DEF"
   * });
   */
  DeleteRole (request: DeleteRoleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/DeleteRole", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information about a group and its roles
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/getgroup Microsoft Documentation}
   * @example
   * await groupClient.GetGroup({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   }
   * });
   */
  GetGroup (request: GetGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetGroupResponse>("/Group/GetGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Invites a player to join a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/invitetogroup Microsoft Documentation}
   * @example
   * await groupClient.InviteToGroup({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "RoleId": "awesomepeople",
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  InviteToGroup (request: InviteToGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<InviteToGroupResponse>("/Group/InviteToGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Checks to see if an entity is a member of a group or role within the group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/ismember Microsoft Documentation}
   * @example
   * await groupClient.IsMember({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "RoleId": "ABC1234DEF",
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  IsMember (request: IsMemberRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<IsMemberResponse>("/Group/IsMember", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all outstanding requests to join a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/listgroupapplications Microsoft Documentation}
   * @example
   * await groupClient.ListGroupApplications({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   }
   * });
   */
  ListGroupApplications (request: ListGroupApplicationsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListGroupApplicationsResponse>("/Group/ListGroupApplications", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all entities blocked from joining a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/listgroupblocks Microsoft Documentation}
   * @example
   * await groupClient.ListGroupBlocks({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   }
   * });
   */
  ListGroupBlocks (request: ListGroupBlocksRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListGroupBlocksResponse>("/Group/ListGroupBlocks", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all outstanding invitations for a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/listgroupinvitations Microsoft Documentation}
   * @example
   * await groupClient.ListGroupInvitations({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   }
   * });
   */
  ListGroupInvitations (request: ListGroupInvitationsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListGroupInvitationsResponse>("/Group/ListGroupInvitations", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all members for a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/listgroupmembers Microsoft Documentation}
   * @example
   * await groupClient.ListGroupMembers({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   }
   * });
   */
  ListGroupMembers (request: ListGroupMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListGroupMembersResponse>("/Group/ListGroupMembers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all groups and roles for an entity
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/listmembership Microsoft Documentation}
   * @example
   * await groupClient.ListMembership({});
   */
  ListMembership (request: ListMembershipRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMembershipResponse>("/Group/ListMembership", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all outstanding invitations and group applications for an entity
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/listmembershipopportunities Microsoft Documentation}
   * @example
   * await groupClient.ListMembershipOpportunities({});
   */
  ListMembershipOpportunities (request: ListMembershipOpportunitiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMembershipOpportunitiesResponse>("/Group/ListMembershipOpportunities", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Removes an application to join a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/removegroupapplication Microsoft Documentation}
   * @example
   * await groupClient.RemoveGroupApplication({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  RemoveGroupApplication (request: RemoveGroupApplicationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/RemoveGroupApplication", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Removes an invitation join a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/removegroupinvitation Microsoft Documentation}
   * @example
   * await groupClient.RemoveGroupInvitation({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  RemoveGroupInvitation (request: RemoveGroupInvitationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/RemoveGroupInvitation", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Removes members from a group.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/removemembers Microsoft Documentation}
   * @example
   * await groupClient.RemoveMembers({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "RoleId": "ABC1234DEF",
   *   "Members": [
   *     {
   *       "Id": "90901000",
   *       "Type": "title_player_account",
   *       "TypeString": "title_player_account"
   *     }
   *   ]
   * });
   */
  RemoveMembers (request: RemoveMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/RemoveMembers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Unblocks a list of entities from joining a group
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/unblockentity Microsoft Documentation}
   * @example
   * await groupClient.UnblockEntity({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  UnblockEntity (request: UnblockEntityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Group/UnblockEntity", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates non-membership data about a group.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/updategroup Microsoft Documentation}
   * @example
   * await groupClient.UpdateGroup({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "GroupName": "My New Group Name",
   *   "ExpectedProfileVersion": 17
   * });
   */
  UpdateGroup (request: UpdateGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateGroupResponse>("/Group/UpdateGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates metadata about a role.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/group/groups/updaterole Microsoft Documentation}
   * @example
   * await groupClient.UpdateRole({
   *   "Group": {
   *     "Id": "ABC1234ABC"
   *   },
   *   "RoleId": "ABC1234DEF",
   *   "RoleName": "My New Role Name",
   *   "ExpectedProfileVersion": 17
   * });
   */
  UpdateRole (request: UpdateGroupRoleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateGroupRoleResponse>("/Group/UpdateRole", request, "X-EntityToken", extraHeaders);
  }

};
