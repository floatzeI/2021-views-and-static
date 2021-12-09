var Roblox = Roblox || {};
Roblox.LangDynamic = Roblox.LangDynamic || {};
Roblox.LangDynamic["Feature.Groups"] = {"Action.MakePrimaryGroup":"Make Primary Group","Label.CreateGroupTooltip":"Create a new group","Label.CreateGroupBuildersClubTooltip":"Creating a group requires a Roblox Premium membership.","Label.ManageGroupCreations":"Create or manage group items.","Label.NoGames":"No games are associated with this group.","Label.NoStoreItems":"No items are for sale in this group.","Label.NoAllies":"This group does not have any allies.","Label.NoEnemies":"This group does not have any enemies.","Label.NoMembersInRole":"No group members are in this role.","Label.NoWallPosts":"Nobody has said anything yet...","Label.WallPostPlaceholder":"Say something...","Label.MaxGroupsTooltip":"You may only be in a maximum of {maxGroups} groups at one time","Label.GroupClosed":"Group Closed","Label.GroupLocked":"This group has been locked","Label.OnlyBcCanJoin":"Only Builders Club members can join","Label.NoOne":"No One!","Label.Warning":"Warning","Label.Loading":"Loading...","Label.Success":"Success","Action.GroupAdmin":"Group Admin","Action.ClaimOwnership":"Claim Ownership","Action.RemovePrimary":"Remove Primary","Action.MakePrimary":"Make Primary","Action.LeaveGroup":"Leave Group","Action.AdvertiseGroup":"Advertise Group","Action.AuditLog":"Audit Log","Action.CreateGroup":"Create Group","Action.Upgrade":"Upgrade","Action.UpgradeToJoin":"Upgrade to Join","Action.JoinGroup":"Join Group","Action.CancelRequest":"Cancel Request","Action.Post":"Post","Action.ExileUser":"Exile User","Action.Delete":"Delete","Action.Close":"Close","Action.Exile":"Exile","Action.Cancel":"Cancel","Action.ReportAbuse":"Report Abuse","Message.DefaultError":"An error occurred.","Message.LeaveGroupError":"Unable to leave group.","Message.MakePrimaryError":"Unable to make primary group.","Message.RemovePrimaryError":"Unable to remove primary group.","Message.JoinGroupError":"Unable to join group.","Message.ClaimOwnershipError":"Unable to claim ownership of group.","Message.LoadGroupError":"Unable to load group.","Message.LoadGroupMembershipsError":"Unable to load user membership information.","Message.LoadUserGroupMembershipError":"Unable to load group member information.","Message.SendGroupShoutError":"Unable to send group shout.","Message.LoadGroupMetadataError":"Unable to load group info.","Message.ExileUserError":"Unable to exile user.","Message.DeleteWallPostsByUserError":"Unable to delete wall posts by user.","Message.BuildGroupRolesListError":"Unable to load members for selected role.","Message.SendPostError":"Unable to send post.","Message.LoadWallPostsError":"Unable to load wall posts.","Message.GetGroupRelationshipsError":"Unable to load group affiliates.","Message.DeleteWallPostError":"Unable to delete wall post.","Message.ClaimOwnershipSuccess":"Successfully claimed ownership of group.","Message.DeleteWallPostSuccess":"Successfully deleted wall post.","Message.JoinGroupSuccess":"Successfully joined the group.","Message.JoinGroupPendingSuccess":"Requested to join group, your request is pending.","Description.MakePrimaryGroupWarning":"Are you sure you want to make this your primary group?","Description.RemovePrimaryGroupWarning":"Are you sure you want to remove your primary group?","Description.LeaveGroupWarning":"Are you sure you want to leave this group?","Description.LeaveGroupAsOwnerWarning":"This will leave the group ownerless.","Description.ObcMaxGroups":"You have joined the maximum number of groups.","Description.NoneMaxGroups":"Upgrade to Roblox Premium to join more groups.","Description.OtherBcMaxGroups":"Upgrade your Builders Club to join more groups.","Description.WallPrivacySettings":"Your privacy settings do not allow you to post to group walls. Click here to adjust these settings.","Description.ClothingRevenue":"Groups have the ability to create and sell official shirts, pants, and t-shirts! All revenue goes to group funds.","Description.ExileUserWarning":"Are you sure you want to exile this user?","Description.DeleteAllPostsByUser":"Also delete all posts by this user.","Heading.Funds":"Funds","Heading.About":"About","Heading.Wall":"Wall","Heading.Store":"Store","Heading.Games":"Games","Heading.Allies":"Allies","Heading.Enemies":"Enemies","Heading.Members":"Members","Heading.Rank":"Rank","Heading.Affiliates":"Affiliates","Heading.Description":"Description","Heading.GroupShout":"Group Shout","Heading.Shout":"Shout","Label.ShoutPlaceholder":"Enter your shout","Heading.Primary":"Primary","Action.GroupShout":"Group Shout","Label.Funds":"Funds","Heading.ExileUserWarning":"Warning","Label.DeleteAllPostsByUser":"Also delete all posts by this user.","Heading.LeaveGroup":"Leave Group","Label.WallPostsUnavailable":"Wall posts are temporarily unavailable, please check back later.","Action.Yes":"Yes","Heading.RemovePrimaryGroup":"Remove Primary Group","Heading.MakePrimaryGroup":"Make Primary Group","Label.ByOwner":"By","Label.Members":"{memberCount, plural, =0 {# Members} =1 {# Member} other {# Members}}","Description.noneMaxGroupsPremiumText":"Upgrade to Roblox Premium to join more groups.","Description.otherPremiumMaxGroupsText":"Upgrade your Roblox Premium to join more groups.","Label.CreateGroupPremiumTooltip":"Creating a group requires a Roblox Premium membership.","Label.OnlyPremiumCanJoin":"Only users with membership can join","Description.NoneMaxGroupsPremium":"Upgrade to Roblox Premium to join more groups.","Description.PremiumMaxGroups":"You have joined the maximum number of groups.","Action.ConfigureGroup":"Configure Group","Heading.Payouts":"Payouts","Message.UnknownError":"Unknown error","Message.InvalidGroup":"Group is invalid or does not exist.","Message.TooManyIds":"Too many ids in request.","Message.InvalidIdsError":"Ids could not be parsed from request.","Message.InvalidIds":"Ids could not be parsed from request.","Message.InvalidRelationshipType":"Group relationship type is invalid.","Message.InsufficientPermissionsForRelationships":"You don't have permission to manage this group's relationships.","Message.UnauthorizedForPostStatus":"You are not authorized to post a shout for this group.","Message.MissingGroupStatusContent":"Missing group shout content.","Message.InvalidPaginationParameters":"Invalid or missing pagination parameters.","Message.UnauthorizedForViewGroupPayouts":"You don't have permission to view this group's payouts.","Message.InvalidMembership":"User must have Roblox Premium membership.","Message.MaxGroups":"User is in maximum number of groups.","Message.InsufficientFunds":"Insufficient Robux funds.","Message.InvalidName":"The name is invalid.","Message.NameModerated":"The name is moderated.","Message.InvalidGroupIcon":"The group icon is invalid.","Message.MissingGroupIcon":"The group icon is missing from the request.","Message.TooManyRequests":"Too many requests.","Message.DescriptionTooLong":"The description is too long.","Message.NameTooLong":"The name is too long.","Message.NameTaken":"The name has been taken.","Message.GroupCreationDisabled":"Group creation is currently disabled.","Message.InvalidGroupId":"The group is invalid or does not exist.","Message.InvalidRoleSetId":"The roleset is invalid or does not exist.","Message.InvalidUser":"The user is invalid or does not exist.","Message.UnauthorizedToManageMember":"You do not have permission to manage this member.","Message.PassCaptchaToJoin":"You must pass the captcha test before joining this group.","Message.InsufficientGroupSpace":"You are already in the maximum number of groups.","Message.AlreadyRequested":"You have already requested to join this group.","Message.AlreadyMember":"You are already a member of this group.","Message.InsufficientMembership":"You do not have the Roblox Premium membership necessary to join this group.","Message.TooManyAttempts":"Too many attempts to join the group. Please try again later.","Message.UnauthorizedToClaimGroup":"You are not authorized to claim this group.","Message.CannotClaimGroupWithOwner":"This group already has an owner.","Message.TooManyAttemptsToClaimGroups":"Too many attempts to claim groups. Please try again later.","Message.GroupClosed":"You cannot join a closed group.","Message.UnauthorizedToViewRolesetPermissions":"You are not authorized to view permissions for this roleset.","Message.UserNotInGroup":"You aren't a member of the group specified.","Message.NoPrimary":"The user specified does not have a primary group.","Message.UnauthorizedToViewWall":"You do not have permission to access this group wall.","Message.InvalidGroupWallPostId":"The group wall post id is invalid or does not exist.","Message.TooManyPosts":"You are posting too fast, please try again in a few minutes.","Message.InvalidWallPostContent":"Your post was empty, white space, or more than 500 characters.","Message.PassCaptchaToPost":"Captcha must be solved to post to the group wall.","Message.FeatureDisabled":"The feature is disabled.","Message.InsufficientPermission":"Insufficient permissions to complete the request.","Message.InvalidPayoutType":"Invalid payout type.","Message.InvalidAmount":"The amount is invalid.","Message.InvalidRecipient":"The recipient is invalid.","Description.ReportAbuseDescription":"What would you like to report?","Action.Report":"Report","Heading.Role":"Role","Heading.NameOrDescription":"Name, Icon, or Description","Message.LoadGroupGamesError":"Unable to load games.","Message.LoadGroupStoreItemsError":"Unable to load store items.","Message.GroupMembershipsUnavailableError":"The group membership system is temporarily unavailable. Please try again later.","Label.GroupResults":"Group Results For {Search Term}","Label.NoResults":"No results for \"{searchTerm}\"","Label.SearchGroups":"Search Groups","Label.PublicGroup":"Public","Label.PrivateGroup":"Private","Message.SearchTermEmptyError":"Search term is empty","Message.SearchTermFilteredError":"Search term was filtered","Message.SearchTermCharactersLimit":"The search term needs to be between 2 and 50 characters","Label.CreateGroup":"Create Group","Label.CreateGroupDescription":"Description (optional)","Label.CreateGroupName":"Name your group","Label.CreateGroupEmblem":"Emblem","Action.Purchase":"Purchase","Label.CreateGroupFee":"Group Creation Fee","Heading.Settings":"Settings","Label.AnyoneCanJoin":"Anyone Can Join","Label.ManualApproval":"Manual Approval","Heading.GroupPurchase":"Group Purchase Confirmation","Description.PurchaseBody":"Would you like to create this group for","Message.TooManyGroups":"You have reached the group capacity. Please leave a group before creating a new one.","Message.InsufficientRobux":"You do not have enough Robux to create the group.","Message.NameInvalid":"Name is missing or has invalid characters.","Message.GroupIconInvalid":"Icon is missing or invalid.","Message.GroupIconTooLarge":"Icon cannot be larger than {maxSize} mb.","Message.DuplicateName":"Name is already taken. Please try another.","Label.GroupSearchResults":"Group Results For {searchTerm}","Message.RemoveMember":"{actor} kicked user {user}","Message.DeletePost":"{actor} deleted post \"{postDesc}\" by user {user}","Message.AcceptJoinRequest":"{actor} accepted user {user}'s join request","Message.DeclineJoinRequest":"{actor} declined user {user}'s join request","Message.PostStatus":"{actor} changed the group shout to \"{groupStatus}\"","Message.ChangeRank":"{actor} changed user {user}'s rank from {oldRoleSet} to {newRoleSet}","Message.BuyAd":"{actor} bid {bid} on group ad {adName}","Message.SendAllyRequest":"{actor} sent an ally request to group {group}","Message.CreateEnemy":"{actor} declared group {group} as an enemy","Message.AcceptAllyRequest":"{actor} accepted group {group}'s ally request","Message.DeclineAllyRequest":"{actor} declined group {group}'s ally request","Message.DeleteAlly":"{actor} removed group {group} as an ally","Message.DeleteEnemy":"{actor} removed group {group} as an enemy","Message.AddGroupPlace":"{actor} added game {game} as a group game","Message.DeleteGroupPlace":"{actor} removed game {game} as a group game","Message.CreateItems":"{actor} created the group item {item}","Message.ConfigureItems":"{actor} configured the group item {item}","Message.ChangeOwner":"{actor} changed the group owner. {user} is the new group owner","Message.ChangeOwnerEmpty":"There is no owner of the group","Message.Rename":"{actor} renamed current group to {newName}","Message.Delete":"{actor} deleted current group","Message.AdjustCurrencyAmountsIncreased":"{actor} increased group funds by {amount}","Message.AdjustCurrencyAmountsDecreased":"{actor} decreased group funds by {amount}","Message.Abandon":"{actor} (group owner) abandoned the group","Message.Claim":"{actor} claimed ownership of the group","Message.ChangeDescription":"{actor} changed the description to \"{newDescription}\"","Message.SpendGroupFunds":"{actor} spent {amount} of group funds for: {item}","Message.InviteToClan":"{actor} invited user {user} to the clan","Message.KickFromClan":"{actor} kicked user {user} out of the clan","Message.CancelClanInvite":"{actor} cancelled {user}'s clan invite","Message.BuyClan":"{actor} bought a group clan","Message.CreateAsset":"{actor} created asset {item}","Message.UpdateAsset":"{actor} created new version {version} of asset {item}","Message.UpdateAssetRevert":"{actor} reverted asset {item} from version {version} to {oldVersion}","Message.ConfigureAsset":"{actor} updated asset {item}: {actions}","Message.CreateDeveloperProduct":"{actor} created developer product with id {id}","Message.ConfigureGame":"{actor} updated {game}: {actions}","Message.ConfigureGameDeveloperProduct":"{actor} updated developer product {id}: {actions}","Message.Lock":"{actor} locked the group","Message.Unlock":"{actor} unlocked the group","Message.CreateGamePass":"{actor} created a Game Pass for {game}: {gamePass}","Message.CreateBadge":"{actor} created the badge {badge}","Message.ConfigureBadgeEnabled":"{actor} enabled the badge {badge}","Message.ConfigureBadgeDisabled":"{actor} disabled the badge {badge}","Message.ConfigureBadgeUpdate":"{actor} configured the badge {badge}","Heading.Date":"Date","Heading.User":"User","Label.All":"All","Label.DeletePost":"Delete Post","Label.RemoveMember":"Remove Member","Label.AcceptJoinRequest":"Accept Join Request","Label.DeclineJoinRequest":"Decline Join Request","Label.PostStatus":"Post Shout","Label.ChangeRank":"Change Rank","Label.BuyAd":"Buy Ad","Label.SendAllyRequest":"Send Ally Request","Label.CreateEnemy":"Create Enemy","Label.AcceptAllyRequest":"Accept Ally Request","Label.DeclineAllyRequest":"Decline Ally Request","Label.DeleteAlly":"Delete Ally","Label.DeleteEnemy":"Delete Enemy","Label.AddGroupPlace":"Add Group Place","Label.RemoveGroupPlace":"Remove Group Place","Label.CreateItems":"Create Items","Label.ConfigureItems":"Configure Items","Label.SpendGroupFunds":"Spend Group Funds","Label.ChangeOwner":"Change Owner","Label.Delete":"Delete","Label.AdjustCurrencyAmounts":"Adjust Currency Amounts","Label.Abandon":"Abandon","Label.Claim":"Claim","Label.Rename":"Rename","Label.ChangeDescription":"Change Description","Label.InviteToClan":"Invite to Clan","Label.KickFromClan":"Kick from Clan","Label.CancelClanInvite":"Cancel Clan Invite","Label.BuyClan":"Buy Clan","Label.CreateGroupAsset":"Create Group Asset","Label.UpdateGroupAsset":"Update Group Asset","Label.ConfigureGroupAsset":"Configure Group Asset","Label.RevertGroupAsset":"Revert Group Asset","Label.CreateGroupDeveloperProduct":"Create Group Developer Product","Label.ConfigureGroupDevelopmentItem":"Configure Group Development Item","Label.ConfigureGroupGame":"Configure Group Game","Label.Lock":"Lock","Label.Unlock":"Unlock","Label.CreateGamePass":"Create Game Pass","Label.ModerateDiscussion":"Moderate Discussion","Label.CreateBadge":"Create Badge","Label.ConfigureBadge":"Configure Badge","Label.SavePlace":"Save Place","Label.PublishPlace":"Publish Place","Label.SearchUsers":"Search Users","Message.LoadGroupListError":"Unable to load group list.","Label.DeleteGroupPlace":"Delete Group Place","Heading.ConfigureGroup":"Configure {groupName}","Message.UnkownError":"An unknown error occurred.","Message.SearchTermFiltered":"Search term not appropriate for Roblox.","Message.SearchTermEmpty":"Search term was left empty.","Message.SearchTermConstraint":"Search terms can be 2 to 50 characters long.","Heading.Purchaser":"Purchaser","Heading.Amount":"Amount","Heading.Transactions":"Transactions","Message.NoTransactions":"No transactions have been completed.","Message.Transaction":"Sold {item}","Message.TransactionForPlace":"Sold {item} for {place}","Message.InvalidTargetGroup":"Target group is invalid or does not exist","Message.CannotHaveRelationshipWithSelf":"Your group cannot establish a relationship with itself.","Message.GroupCannotDeclareEnemies":"Your group does not allow enemy declarations.","Message.CannotHaveRelationshipWithGroup":"Other group does not allow enemy declarations.","Message.DuplicateRelationship":"Your group already has a relationship with the target group.","Message.GroupBlocked":"You are blocked from communicating with this user.","Message.RelationshipRequestDoesNotExist":"Relationship request does not exist.","Message.RelationshipDoesNotExist":"Relationship does not exist.","Message.TargetUserNotInGroup":"User is not a member of the group.","Message.UserHasInsufficientMembership":"The user does not have the necessary level of premium membership.","Message.UnauthorizedToChangeOwner":"You are not authorized to change the owner of this group.","Message.InvalidGroupJoinRequest":"The group join request is invalid.","Label.SearchMembers":"Search Members","Message.NoPendingRequests":"There are no pending member requests.","Message.UnableToAcceptAllRequests":"Unable to accept all requests. Please try again.","Message.UnableToDeclineAllRequests":"Unable to decline all requests. Please try again.","Message.UnableToRemoveAffiliate":"Unable to remove group affiliate.","Message.UnableToUpdateRole":"Unable to update the user's role.","Message.SuccessfullyUpdatedRole":"Successfully updated user's role","Heading.Categories":"Categories","Label.SaleOfGoods":"Sale of Goods","Label.PendingSales":"Pending Sales","Label.GroupPayouts":"Group Revenue Payouts","Message.UnableToLoadRevenue":"Unable to load revenue summary","Action.DeleteRole":"Delete Role","Message.DeleteRoleset":"Are you sure you want to delete {role}?","Message.RoleDeleteSuccess":"Role successfully deleted.","Message.RoleDeleteFail":"Unable to delete role.","Message.RoleUpdateSuccess":"Role successfully updated.","Message.RoleUpdateFail":"Unable to update role.","Message.PermissionUpdateSuccess":"Permission successfully updated.","Message.PermissionUpdateFail":"Unable to update permission.","Label.ViewWall":"View group wall","Label.ViewStatus":"View group shout","Label.PostToWall":"Post on group wall","Label.PostToStatus":"Post group shout","Label.DeleteFromWall":"Delete group wall posts","Label.InviteMembers":"Accept join requests","Label.RemoveMembers":"Kick lower-ranked members","Label.ChangeRanks":"Manage lower-ranked member ranks","Label.ManageRelationships":"Manage allies and enemies","Label.CreateItem":"Create group items","Label.ManageItems":"Configure group items","Label.AdvertiseGroup":"Advertise the group","Label.SpendGroupFund":"Spend group funds","Label.ManageGroupGames":"Create and edit group games","Label.ViewAuditLogs":"View audit log","Heading.PostsPermissions":"Posts","Heading.MembershipPermissions":"Members","Heading.EconomyPermissions":"Assets","Heading.ManagementPermissions":"Miscellaneous","Message.RankReserved":"Ranks must be between {minRankPlusOne} and {maxRankMinusOne}. {minRank} and {maxRank} are reserved for guests and the owner.","Action.CreateRole":"Create Role","Message.PurchaseRole":"Purchasing a new role will cost {cost}","Message.TransactionBalance":"Your balance after this transaction will be","Label.UseGroupFunds":"Use group funds to purchase this role","Message.NameFieldEmpty":"The name field cannot be empty","Message.NotEnoughFunds":"You do not have enough funds to purchase this role","Label.PermDeleteRole":"Permanently delete this role","Message.RoleWithUsers":"There {amount, plural, =0 {are # users} =1 {is # user} other {are # users}} in this role. You cannot delete a role with users","Message.UnableToPurchaseRole":"Failed to process payment to purchase role.","Message.RoleLimitReached":"Limit for roles have been reached on this group.","Message.UsersInRole":"There are users in this role.","Message.CannotRemoveRole":"Cannot remove any more roles.","Message.CannotDeleteRole":"Cannot delete this role.","Message.MissingRoleName":"Missing role name.","Message.MissingRoleRank":"Missing role rank.","Message.RoleNameExists":"Role name already exists.","Message.RankOutOfBounds":"Rank value is out of bounds.","Message.RoleNameTooLong":"The role name is too long.","Message.RoleDescriptionTooLong":"The roles description is too long.","Message.UnauthorizedToEditPermissions":"You are not authorized to view/edit permissions for this role.","Message.ImmutableRole":"This role's permissions can not be modified.","Heading.GroupSearchCategoryBuilding":"Building","Heading.GroupSearchCategoryMilitary":"Military","Heading.GroupSearchCategoryRoleplaying":"Roleplaying","Heading.GroupSearchCategoryFan":"Fan","Label.Percentage":"Percentage","Label.RevenueToGroupFund":"Revenue going to group fund:","Label.PayingOut":"Paying out:","Label.RemainingFunds":"Remaining Funds:","Heading.RecurringPayout":"Recurring Payout","Heading.OneTimePayout":"One-time Payout","Label.AddMember":"Add Member","Label.DistributeBy":"Distributing Robux by:","Label.AvailableFunds":"Available Funds","Message.NoFundsDistribute":"You do not have any funds to distribute.","Message.CannotDeleteThisRole":"Cannot delete this role.","Message.CannotUpdateGuest":"Cannot update Guest role.","Message.CannotUpdateOwner":"Cannot update Owner role rank.","Message.TooManyRecipients":"Too many recipients.","Message.PaidOutRecently":"Group has paid out too recently. Please wait and try again.","Message.DescriptionEmpty":"Your group description was empty.","Message.InvalidFileType":"Invalid file type for group icon.","Label.Ownership":"Ownership","Label.ChangeGroupOwner":"Change the group's owner","Label.Username":"Username","Label.SelectNewOwner":"Please select the new group owner","Label.GroupFunds":"Group Funds:","Action.GoToDetails":"Go to Details","Message.UserIsOwner":"User is already the owner.","Message.MaxRoles":"A maximum of 40 roles are allowed.","Message.TransactionsBalance":"Your balance after this transaction will be {balance}","Heading.GroupSearchCategories":"Building,Military,Roleplaying,Fan","Heading.Requests":"Requests","Label.AllowDeclarations ":"Allow enemy declarations","Label.FundsVisible":"Group funds publicly visible","Label.GamesVisible":"Group games are visible on the group home page","Label.MustBeAccepted":"User requests must be accepted to join group","Label.NoLongerModify":"If you turn this setting off, you will no longer be able to modify it","Label.PremiumOnly":"Premium Only","Message.SettingUpdated":"Setting successfully updated","Message.SettingFail":"Unable to update setting","Heading.Information":"Information","Heading.SocialLinks":"Social Links","Heading.Revenue":"Revenue","Heading.Summary":"Summary","Heading.RecurringPayouts":"Recurring Payouts","Heading.Roles":"Roles","Heading.AuditLog":"Audit Log","Action.BackToGroup":"Back to Group","Message.YouAreOwner":"You are already the owner of this group.","Message.CannotChangeOwnRole":"You cannot change your own role.","Message.NotEnoughFundsDistribute":"You do not have enough funds to distribute this amount.","Message.MemberAdded":"Member was already added to payout.","Message.ValueMustBeWhole":"Value must be a whole number.","Heading.JoinRequirements":"Join Requirements","Heading.GroupProfile":"Group Profile","Message.MemberNotFound":"Member does not exist within this role.","Label.AddPayoutRecipient":"Add Payout Recipient","Label.EnterPayoutRecipient":"Enter the payout recipient's username","Message.NoAllyRequests":"No ally requests","Message.UnableToLoadAllyRequests":"Unable to load ally requests","Label.DeclareEnemy":"Declare Enemy","Description.EnterGroupName":"Enter the group name","Label.GroupName":"Group Name","Action.Send":"Send","Action.Request":"Request","Label.Total":"Total","Description.PendingTransaction":"Pending","Description.PendingSales":"Pending sales are not included in your total until released, which could take up to a few days","Message.SettingsLoadFail":"Unable to load group settings.","Message.ConfigMetadataLoadFail":"Could not load group configuration metadata.","Message.PercentagePaidOut":"{percentage}% of the group's proceeds will be paid out","Message.AmountPaidOut":"{amount} Robux were paid out to users from the group","Heading.RemoveAlly":"Remove Ally","Heading.RemoveEnemy":"Remove Enemy","Description.RemoveAlly":"Are you sure you want to remove this group as an ally?","Description.RemoveEnemy":"Are you sure you want to remove this group as an enemy?","Action.AcceptAll":"Accept All","Action.DeclineAll":"Decline All","Label.EnemyDeclarationsNotEnabled":"Enemy declarations are not enabled. Please update your settings if you would like to enable this feature.","Message.NoRecordsFound":"No records found.","Description.ChangeOwnerWarning":"This is a permanent change and you will lose all of the privileges of group ownership.","Message.LoadTransactionsError":"Unable to load transactions.","Heading.Sales":"Sales","Message.LoadAuditLogsError":"Unable to load audit logs.","Heading.Item":"Item","Message.ForPlace":"For {place}","Message.PurchasedBy":"Purchased by {user}","Label.GroupPremiumPayouts":"Group Premium Payouts","Label.PendingRobux":"Pending Robux","Description.PendingRobux":"Pending Robux are not included in your total until released, which could take up to a few days","Would you like to create this group for (amount)?":"Description.PurchaseBodyAmount","Description.PurchaseBodyAmount":"Would you like to create this group for {amount}?","Description.CreateGroup":"Create your own group! Invite all of your friends, and duke it out with all your rivals!","Description.JoinGroup":"Join a group to connect with people like you! Groups exist for all types of communities - fan clubs, help groups, hobbies, corporations, and more. Groups have their own walls and shared places.","Heading.JoinGroup":"Join a Group","Action.SeeAll":"See All","Message.UserAlreadyAdded":"User is already a payout recipient.","Message.SearchTermMinMax":"The search term needs to be between {min} and {max} characters","Label.Owner":"Owner","Label.Admin":"Admin","Label.Member":"Member","Label.Guest":"Guest","Message.Owner":"The group's owner.","Message.Admin":"A group administrator.","Message.Member":"A regular group member.","Message.Guest":"A non-group member.","Message.MaxNumberRoles":"A maximum of {maxRoles} roles are allowed.","Message.PinLocked":"You cannot perform this action with a locked pin. Unlock your pin in the Account Settings page.","Heading.GroupsYouOwn":"Groups You Own","Heading.GroupsYouAreIn":"Groups You Are In","Message.GroupRestricted":"This group is not available in your region","Action.RequestToJoin":"Request to Join","Heading.GroupSearchCategoryGameStudios":"Game Studios","Heading.GroupSearchCategoryGameDevelopment":"Game Development","Heading.GroupSearchCategoryFriends":"Friends' Groups","Message.PayoutRestricted":"Your funds were recently transferred and are being verified. Please try again later.","Message.UpdateRolesetRank":"{actor} updated roleset {roleSetName}'s rank from {oldRank} to {newRank}","Message.UpdateRolesetDataNameOnly":"{actor} updated roleset {oldName}'s name to {newName}","Message.UpdateRolesetDataDescOnly":"{actor} updated roleset {newName}'s description from \"{oldDescription}\" to \"{newDescription}\"","Message.UpdateRolesetData":"{actor} updated roleset {oldName}'s name to {newName} and changed description from \"{oldDescription}\" to \"{newDescription}\"","Action.SeeNewWallPosts":"See New Wall Posts","Label.IndividualToGroupTotal":"Individual to Group Robux Transfers (includes pending transfers)","Message.UserGroupPayoutIneligible":"User is new to group and not yet eligible for payouts. Please try again later.","Message.LoadPayoutsError":"Unable to load payouts","Label.AddFunds":"Add Funds","Label.LastAddedFunds":"Successful transfer from {userName} to {groupName} on {transferDate}.","Label.AddFundsPrompt":"Transfer from {userName} to {groupName}","Message.AddFundsLimitMessage":"Transfers subject to holds. You can only transfer robux to this group from your account once every {limit} days","Heading.AddFundsModal":"Transfer Funds","Message.AddFundsModal":"Are you sure you want to transfer {robuxWithIcon} to {groupName}?","Message.InsufficentFunds":"Insufficent Robux Funds","Message.GeneralAddFundsError":"Something Went Wrong","Action.MoreGroups":"More Groups","Heading.Groups":"Groups","Heading.MyGroups":"My Groups","Label.SearchAllGroups":"Search All Groups","Label.AddFundsAmount":"Amount","Message.MaximumExceeded":"The maximum amount of Robux eligible to be transferred is {robux}","Label.MembersCount":"{memberCount, plural, =0 {# Members} =1 {# Member} other {# Members}}","Action.MyGroups":"My Groups","Label.ConfigureGroupClothing":"Configure group clothing items","Label.CreateGroupClothing":"Create group clothing items","Label.CreateGroupGamesAndAssets":"Create and configure group games and development items"};
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("DynamicLocalizationResourceScript_Feature.Groups");
