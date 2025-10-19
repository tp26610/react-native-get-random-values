#import "GetRandomValues.h"

@implementation GetRandomValues
- (NSString *)getRandomBase64:(double)byteLength {
    NSMutableData *data = [NSMutableData dataWithLength:byteLength];
    int result = SecRandomCopyBytes(kSecRandomDefault, byteLength, data.mutableBytes);
    if (result != errSecSuccess) {
        @throw([NSException exceptionWithName:@"NO_RANDOM_BYTES" reason:@"Failed to aquire secure random bytes" userInfo:nil]);
    }
    return [data base64EncodedStringWithOptions:0];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeGetRandomValuesSpecJSI>(params);
}

+ (NSString *)moduleName
{
  return @"GetRandomValues";
}

@end
