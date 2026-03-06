from sqlalchemy import Column, Integer, String, Date
from app.database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    ma_sv = Column(String(20), unique=True, nullable=False, index=True)
    ho_ten = Column(String(100), nullable=False)
    ngay_sinh = Column(Date, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    lop = Column(String(50), nullable=True)
