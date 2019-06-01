import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes


session = boto3.session.Session(region_name='us-east-1',profile_name='portfolioadmin')
s3 = session.resource('s3', config=Config(signature_version='s3v4'))

portfolio_bucket = s3.Bucket("portfolio.vijayramalingam.info")
build_bucket = s3.Bucket("portfoliobuild.vijayramalingam.info")

portfolio_zip = StringIO.StringIO()

build_bucket.download_fileobj("BuildPortfolio",portfolio_zip)

with zipfile.ZipFile(portfolio_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfolio_bucket.upload_fileobj(obj,nm,
        ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
