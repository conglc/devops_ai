from datetime import date
from pydantic import BaseModel


class StudentBase(BaseModel):
    ma_sv: str
    ho_ten: str
    ngay_sinh: date
    email: str
    lop: str | None = None


class StudentCreate(StudentBase):
    pass


class StudentUpdate(StudentBase):
    pass


class StudentResponse(StudentBase):
    id: int

    model_config = {"from_attributes": True}
