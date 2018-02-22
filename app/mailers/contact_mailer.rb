class ContactMailer < ActionMailer::Base
  default to: 'lukekorsman@gmail.com'
  
  def contact_email(name, email, body)
    @name = name
    @email = email
    @body = body
    
    mail(from: 'lukekorsman@gmail.com', subject: 'Contact Form Message')
  end
  
end