export const contactConfig = {
  title: "Contact",
  sections: [
    {
      type: "form",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          placeholder: "Your Name"
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "your.email@example.com"
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          placeholder: "Your message here..."
        }
      ]
    }
  ]
};

