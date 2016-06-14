class Ability
  include CanCan::Ability
  def initialize(user)               # allow everyone to read everything
    if user && user.admin?
      can :access, :rails_admin       # only allow admin users to access Rails Admin
      can :dashboard                  # allow access to dashboard
      if user.role? :superadmin
        can :manage, :all             # allow superadmins to do anything
      elsif user.role? :manager
        can :manage, [User, Product]  # allow managers to do anything to products and users
      elsif user.role? :sales
        can :update, Product, :hidden => false  # allow sales to only update visible products
      end
    end
  end
end




# # Always performed
# can :access, :rails_admin # needed to access RailsAdmin
#
# # Performed checks for `root` level actions:
# can :dashboard            # dashboard access
#
# # Performed checks for `collection` scoped actions:
# can :index, Model         # included in :read
# can :new, Model           # included in :create
# can :export, Model
# can :history, Model       # for HistoryIndex
# can :destroy, Model       # for BulkDelete
#
# # Performed checks for `member` scoped actions:
# can :show, Model, object            # included in :read
# can :edit, Model, object            # included in :update
# can :destroy, Model, object         # for Delete
# can :history, Model, object         # for HistoryShow
# can :show_in_app, Model, object
# Status API Training Shop Blog About
