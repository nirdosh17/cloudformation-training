MAKE_ARGS:=--profile $(AWS_PROFILE) --region $(AWS_REGION)

ACCOUNT_ID:=$(shell aws sts get-caller-identity $(MAKE_ARGS) --output text --query 'Account')

SAM_SOURCE_BUCKET:=sam-artifactory-$(AWS_REGION)-$(ACCOUNT_ID)

STACK_NAME:=cfn-training-lambda-nirdosh

package:
	sam package --template-file lambda.yaml --output-template-file packaged.yaml --s3-bucket $(SAM_SOURCE_BUCKET) $(MAKE_ARGS)

# create/update
deploy:
	sam deploy --template-file packaged.yaml --stack-name $(STACK_NAME) \
	--capabilities CAPABILITY_IAM $(MAKE_ARGS)
