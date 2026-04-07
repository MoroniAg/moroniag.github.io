from pydantic import BaseModel, EmailStr


class ContactRequest(BaseModel):
    name: str
    email: str
    message: str
    company_name: str = ""
