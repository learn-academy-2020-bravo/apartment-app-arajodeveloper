class HomeController < ApplicationController
  def root
    @apartments = Apartment.all
    # render "show", :locals => {:apartments => User.first, :some_other_variable => "Value"}
    # render template: "root/show", apartments => "apartments"
  
  end
end


